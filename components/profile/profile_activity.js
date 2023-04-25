export default function ProfileActivity() {
    const tabs = [
        { name: 'New', href: '#', current: true },
        { name: 'Old', href: '#', current: false },
        { name: 'Rep', href: '#', current: false },
      ]
      
      function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }
    return (
      <div className="grid grid-cols-2 space-x-2">
        <div className="col-span-1 border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
        <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
          <div className="ml-4 mt-2">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Questions</h3>
          </div>
          <div className="ml-4 mt-2 flex-shrink-0">
          <div className="hidden sm:block">
        <nav className="isolate flex divide-x divide-gray-200 rounded-lg shadow" aria-label="Tabs">
          {tabs.map((tab, tabIdx) => (
            <a
              key={tab.name}
              href={tab.href}
              className={classNames(
                tab.current ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700',
                tabIdx === 0 ? 'rounded-l-lg' : '',
                tabIdx === tabs.length - 1 ? 'rounded-r-lg' : '',
                'group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10'
              )}
              aria-current={tab.current ? 'page' : undefined}
            >
              <span>{tab.name}</span>
              <span
                aria-hidden="true"
                className={classNames(
                  tab.current ? 'bg-indigo-500' : 'bg-transparent',
                  'absolute inset-x-0 bottom-0 h-0.5'
                )}
              />
            </a>
          ))}
        </nav>
      </div>
          </div>
        </div>
      </div>
      <div className="col-span-1 border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
        <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
          <div className="ml-4 mt-2">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Answers</h3>
          </div>
          <div className="ml-4 mt-2 flex-shrink-0">
          <div className="hidden sm:block">
        <nav className="isolate flex divide-x divide-gray-200 rounded-lg shadow" aria-label="Tabs">
          {tabs.map((tab, tabIdx) => (
            <a
              key={tab.name}
              href={tab.href}
              className={classNames(
                tab.current ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700',
                tabIdx === 0 ? 'rounded-l-lg' : '',
                tabIdx === tabs.length - 1 ? 'rounded-r-lg' : '',
                'group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10'
              )}
              aria-current={tab.current ? 'page' : undefined}
            >
              <span>{tab.name}</span>
              <span
                aria-hidden="true"
                className={classNames(
                  tab.current ? 'bg-indigo-500' : 'bg-transparent',
                  'absolute inset-x-0 bottom-0 h-0.5'
                )}
              />
            </a>
          ))}
        </nav>
      </div>
          </div>
        </div>
      </div>
      </div>
    )
  }