import React from 'react';
import { Link } from 'react-router-dom';

export const BottomBar = () => {
  return (
    <div className="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-rose-50 border border-gray-200 rounded-full bottom-4 left-1/2 lg:w-16 lg:h-[88vh] lg:top-1/2 lg:left-4 lg:translate-y-[-50%] lg:rounded-none lg:border-0 lg:flex lg:flex-col lg:justify-between lg:items-center lg:mx-5">
      <div class="grid h-full max-w-lg grid-cols-4 mx-auto lg:grid-cols-1 lg:max-w-none lg:w-full">
        {/* Home Button */}
        <Link to="/" class="inline-flex flex-col items-center justify-center px-5 rounded-s-full group lg:rounded-none lg:px-2 lg:py-5">
					<img class='w-5' src="home.svg" alt="Home" />
          <span className="sr-only">Home</span>
        </Link>
        

        {/* Report Button */}
        <Link to="/report" class="inline-flex flex-col items-center justify-center px-5 rounded-s-full group lg:rounded-none lg:px-2 lg:py-5">
					<img class='w-6' src="report.svg" alt="Report" />
          <span className="sr-only">Report</span>
        </Link>

				{/* Friends Button */}
				<Link to="/friends" class="inline-flex flex-col items-center justify-center px-5 rounded-s-full group lg:rounded-none lg:px-2 lg:py-5">
					<img class='w-7' src="public.svg" alt="Friends" />
          <span className="sr-only">Friends</span>
        </Link>

				{/* Help Button */}
				<Link to="/help" class="inline-flex flex-col items-center justify-center px-5 rounded-s-full group lg:rounded-none lg:px-2 lg:py-5">
					<img class='w-6' src="help.svg" alt="Help" />
					<span className="sr-only">Help</span>
				</Link>
    </div>
		</div>
  );
};
