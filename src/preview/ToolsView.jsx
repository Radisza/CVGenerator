import PropTypes from 'prop-types';

function ToolsView({ tools }) {
  if (tools.data.length == 0) {
    return;
  }
  return (
    <div className="flex-column">
      <div className="title">{tools.getName()}</div>
      <ul>
        {tools.data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

ToolsView.propTypes = {
  tools: PropTypes.object.isRequired,
};

export default ToolsView;
