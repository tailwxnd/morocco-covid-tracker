import React from 'react';
import NavBar from '../components/NavBar';

function informations() {
  return (
    <div>
      <NavBar />
      <div className="mb-32">
        <div className="max-w-screen-xl mx-auto py-12 px-2 sm:px-6 lg:py-16 lg:px-8">
          <h2 className="text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
            FAQ
          </h2>
          <div className="mt-6 border-t-2 border-gray-200 pt-6">
            <dl>
              <div className="md:grid md:grid-cols-12 md:gap-8">
                <dt className="text-base leading-6 font-medium text-gray-900 md:col-span-5">
                  What's the best thing about Switzerland?
                </dt>
                <dd className="mt-2 md:mt-0 md:col-span-7">
                  <p className="text-base leading-6 text-gray-500">
                    I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quas cupiditate laboriosam fugiat.
                  </p>
                </dd>
              </div>
              <div className="mt-8 border-t border-gray-200 pt-6 md:grid md:grid-cols-12 md:gap-8">
                <dt className="text-base leading-6 font-medium text-gray-900 md:col-span-5">
                  How do you make holy water?
                </dt>
                <dd className="mt-2 md:mt-0 md:col-span-7">
                  <p className="text-base leading-6 text-gray-500">
                    You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aut
                    tempora vitae odio inventore fuga aliquam nostrum quod porro. Delectus quia facere id sequi expedita
                    natus.
                  </p>
                </dd>
              </div>
              <div className="mt-8 border-t border-gray-200 pt-6 md:grid md:grid-cols-12 md:gap-8">
                <dt className="text-base leading-6 font-medium text-gray-900 md:col-span-5">
                  What do you call someone with no body and no nose?
                </dt>
                <dd className="mt-2 md:mt-0 md:col-span-7">
                  <p className="text-base leading-6 text-gray-500">
                    Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas ipsa quia
                    excepturi, quibusdam natus exercitationem sapiente tempore labore voluptatem.
                  </p>
                </dd>
              </div>
              <div className="mt-8 border-t border-gray-200 pt-6 md:grid md:grid-cols-12 md:gap-8">
                <dt className="text-base leading-6 font-medium text-gray-900 md:col-span-5">
                  What is the least spoken language in the world?
                </dt>
                <dd className="mt-2 md:mt-0 md:col-span-7">
                  <p className="text-base leading-6 text-gray-500">
                    Sign language. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam
                    fugiat.
                  </p>
                </dd>
              </div>
              <div className="mt-8 border-t border-gray-200 pt-6 md:grid md:grid-cols-12 md:gap-8">
                <dt className="text-base leading-6 font-medium text-gray-900 md:col-span-5">
                  Why can't you hear a pterodactyl go to the bathroom?
                </dt>
                <dd className="mt-2 md:mt-0 md:col-span-7">
                  <p className="text-base leading-6 text-gray-500">
                    Because the pee is silent. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, quas
                    voluptatibus ex culpa ipsum, aspernatur blanditiis fugiat ullam magnam suscipit deserunt illum natus
                    facilis atque vero consequatur! Quisquam, debitis error.
                  </p>
                </dd>
              </div>
              <div className="mt-8 border-t border-gray-200 pt-6 md:grid md:grid-cols-12 md:gap-8">
                <dt className="text-base leading-6 font-medium text-gray-900 md:col-span-5">
                  Why did the invisible man turn down the job offer?
                </dt>
                <dd className="mt-2 md:mt-0 md:col-span-7">
                  <p className="text-base leading-6 text-gray-500">
                    He couldn't see himself doing it. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
                    perspiciatis officiis corrupti tenetur. Temporibus ut voluptatibus, perferendis sed unde rerum
                    deserunt eius.
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}

export default informations;