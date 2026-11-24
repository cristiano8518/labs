import React from 'react';

const AddArticle = ({ title, summary, onChangeTitle, onChangeSummary, onClickAdd }) => {
  return (
    <section>
      <h1>Add New Article</h1>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={onChangeTitle}
      />
      <input
        type="text"
        placeholder="Summary"
        value={summary}
        onChange={onChangeSummary}
      />
      <button onClick={onClickAdd}>Add</button>
    </section>
  );
};

export default AddArticle;
