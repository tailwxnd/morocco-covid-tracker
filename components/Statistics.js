import React from 'react';
import PieChart from 'react-minimal-pie-chart';

const URL = 'https://corona.lmao.ninja/countries/Morocco';

class Statistics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers() {
    fetch(URL)
      .then(response => response.json())
      .then(data =>
        this.setState({
          items: data,
        })
      );
  }

  render() {
    const { items } = this.state;
    return (
      <div className="pt-12 sm:pt-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
              Statistiques COVID-19 au Maroc
            </h2>
            <p className="mt-3 text-xl leading-7 text-gray-500 sm:mt-4">
              Les statistiques sont mises à jour toutes les 10 minutes. toutes les données et
              statistiques ont été recoltées sur
              <a href="https://www.worldometers.info/" target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:text-teal-400 hover:underline">{' '}Worldometer </a>
            </p>
          </div>
        </div>
        <div className="mt-10 pb-12 bg-white sm:pb-16">
          <div className="relative">
            <div className="absolute  inset-0 h-1/2" />
            <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <div className="rounded-lg bg-white border-2 border-gray-100  shadow-xl sm:grid sm:grid-cols-3">
                  <div className="border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                    <p className="text-5xl leading-none font-extrabold text-teal-600">
                      {items.cases}
                    </p>
                    <p className="mt-2 text-lg leading-6 font-medium text-gray-500">Cas</p>
                  </div>
                  <div className="border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                    <p className="text-5xl leading-none font-extrabold text-teal-600">
                      {items.deaths}
                    </p>
                    <p className="mt-2 text-lg leading-6 font-medium text-gray-500">Décés</p>
                  </div>
                  <div className="border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                    <p className="text-5xl leading-none font-extrabold text-teal-600">
                      {items.recovered}
                    </p>
                    <p className="mt-2 text-lg leading-6 font-medium text-gray-500">Guéris</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <PieChart
            data={[
              { title: 'Cas', value: items.cases, color: '#E6FFFA' },
              { title: 'Deces', value: items.deaths, color: '#81E6D9' },
              { title: 'Gueris', value: items.recovered, color: '#38B2AC' },
            ]}
            animate
            animationDuration={500}
            animationEasing="ease-out"
            cx={50}
            cy={50}
            lengthAngle={360}
            lineWidth={15}
            label
            labelPosition={112}
            labelStyle={{
              fill: '#234E52',
              fontFamily: 'system-ui, sans-serif',
              fontSize: '5px'
            }}
            style={{
              height: '500px'
            }}
          />;
        </div>
        </div>
    );
  }
}

export default Statistics;
