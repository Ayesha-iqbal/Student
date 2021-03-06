const Stats = () => {
  return (
    <div>
      <h3 className='text-lg leading-6 font-medium text-gray-900'>Last 30 days</h3>
      <div className='mt-5 grid grid-cols-1 rounded-lg bg-white overflow-hidden shadow md:grid-cols-3'>
        <div>
          <div className='px-4 py-5 sm:p-6'>
            <dl>
              <dt className='text-base leading-6 font-normal text-gray-900'>Total Subscribers</dt>
              <dd className='mt-1 flex justify-between items-baseline md:block lg:flex'>
                <div className='flex items-baseline text-2xl leading-8 font-semibold text-indigo-600'>
                  71,897
                  <span className='ml-2 text-sm leading-5 font-medium text-gray-500'>
                    from 70,946
                  </span>
                </div>
                <div className='inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium leading-5 bg-green-100 text-green-800 md:mt-2 lg:mt-0'>
                  <svg
                    className='-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z'
                      clip-rule='evenodd'
                    />
                  </svg>
                  <span className='sr-only'>Increased by</span>
                  12%
                </div>
              </dd>
            </dl>
          </div>
        </div>
        <div className='border-t border-gray-200 md:border-0 md:border-l'>
          <div className='px-4 py-5 sm:p-6'>
            <dl>
              <dt className='text-base leading-6 font-normal text-gray-900'>Avg. Open Rate</dt>
              <dd className='mt-1 flex justify-between items-baseline md:block lg:flex'>
                <div className='flex items-baseline text-2xl leading-8 font-semibold text-indigo-600'>
                  58.16%
                  <span className='ml-2 text-sm leading-5 font-medium text-gray-500'>
                    from 56.14%
                  </span>
                </div>
                <div className='inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium leading-5 bg-green-100 text-green-800 md:mt-2 lg:mt-0'>
                  <svg
                    className='-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z'
                      clip-rule='evenodd'
                    />
                  </svg>
                  <span className='sr-only'>Increased by</span>
                  2.02%
                </div>
              </dd>
            </dl>
          </div>
        </div>
        <div className='border-t border-gray-200 md:border-0 md:border-l'>
          <div className='px-4 py-5 sm:p-6'>
            <dl>
              <dt className='text-base leading-6 font-normal text-gray-900'>Avg. Click Rate</dt>
              <dd className='mt-1 flex justify-between items-baseline md:block lg:flex'>
                <div className='flex items-baseline text-2xl leading-8 font-semibold text-indigo-600'>
                  24.57%
                  <span className='ml-2 text-sm leading-5 font-medium text-gray-500'>
                    from 28.62
                  </span>
                </div>
                <div className='inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium leading-5 bg-red-100 text-red-800 md:mt-2 lg:mt-0'>
                  <svg
                    className='-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-red-500'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z'
                      clip-rule='evenodd'
                    />
                  </svg>
                  <span className='sr-only'>Decreased by</span>
                  4.05%
                </div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
