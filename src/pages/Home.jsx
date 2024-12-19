import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
	return (
		<div className='bg-rose-50'>
		<div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
        </div>
        <div className="mx-auto max-w-2xl py-24 sm:py-38 lg:py-46">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Welcome to Boardly.in
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero rerum, nesciunt repudiandae magni possimus quia maiores laboriosam
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/report"
                className="rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Review your tests
              </Link>
              
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
        </div>
			</div>
		</div>
	)
}
