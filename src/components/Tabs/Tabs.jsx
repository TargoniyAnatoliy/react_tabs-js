export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId) ?? tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={tab.id === activeTab.id ? 'is-active' : ''}
              data-cy="Tab"
            >
              <a
                onClick={
                  tab.id !== activeTab.id
                    ? () => onTabSelected(tab.id)
                    : undefined
                }
                href={`#${tab.id}`}
                data-cy="TabLink"
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {activeTab && (
        <div className="block" data-cy="TabContent">
          {activeTab.content}
        </div>
      )}
    </div>
  );
};
