export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const selectedTabId = tabs.some(tab => tab.id === activeTabId)
    ? activeTabId
    : tabs[0].id;

  const activeTab = selectedTabId;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={tab.id === selectedTabId ? 'is-active' : ''}
              data-cy="Tab"
            >
              <a
                onClick={
                  tab.id !== selectedTabId
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
