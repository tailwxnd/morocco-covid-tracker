import React from 'react';
import NavBar from '../components/NavBar';

function contact() {
  return(
    <div>
      <NavBar />
      <div className="bg-white">
        <div className="max-w-screen-xl mx-auto pt-12 pb-16 sm:pt-16 sm:pb-20 px-4 sm:px-6 lg:pt-20 lg:pb-28 lg:px-8">
          <h2 className="text-3xl leading-9 font-extrabold text-gray-900">
            Numeros de téléphone en cas d'urgences
          </h2>
          <div className="mt-6 border-t-2 border-gray-100 pt-10">
            <dl className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <div>
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Allo Veille Epidémiologique
                  </dt>
                  <dd className="mt-2">
                    <p className="text-base leading-6 text-gray-500">
                      0801004747
                    </p>
                  </dd>
                </div>
                <div className="mt-12">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Institut Pasteur
                  </dt>
                  <dd className="mt-2">
                    <p className="text-base leading-6 text-gray-500">
                      0522262062
                    </p>
                  </dd>
                </div>
                <div className="mt-12">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Ambulance
                  </dt>
                  <dd className="mt-2">
                    <p className="text-base leading-6 text-gray-500">
                      150
                    </p>
                  </dd>
                </div>
                <div className="mt-12">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Gendarmerie Royale
                  </dt>
                  <dd className="mt-2">
                    <p className="text-base leading-6 text-gray-500">
                      177
                    </p>
                  </dd>
                </div>
                <div className="mt-12">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Pompiers
                  </dt>
                  <dd className="mt-2">
                    <p className="text-base leading-6 text-gray-500">
                      150
                    </p>
                  </dd>
                </div>
              </div>
              <div className="mt-12 md:mt-0">
                <div>
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    SOS Medecins
                  </dt>
                  <dd className="mt-2">
                    <p className="text-base leading-6 text-gray-500">
                      0522989898
                    </p>
                  </dd>
                </div>
                <div className="mt-12">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Centre Antipoison
                  </dt>
                  <dd className="mt-2">
                    <p className="text-base leading-6 text-gray-500">
                      0801000180
                    </p>
                  </dd>
                </div>
                <div className="mt-12">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Renseignements
                  </dt>
                  <dd className="mt-2">
                    <p className="text-base leading-6 text-gray-500">
                      160
                    </p>
                  </dd>
                </div>
                <div className="mt-12">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Police
                  </dt>
                  <dd className="mt-2">
                    <p className="text-base leading-6 text-gray-500">
                      190
                    </p>
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}

export default contact;