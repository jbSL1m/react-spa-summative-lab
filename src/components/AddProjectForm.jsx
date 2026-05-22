import { useState } from 'react';

function AddProjectForm({ onAdd }) {
  const [form, setForm] = useState({ title: '', category: '', description: '' });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.title.trim()) return;
    onAdd({ ...form, id: Date.now() });
    setForm({ title: '', category: '', description: '' });
  }

  return (
    <form className="add-project-form" onSubmit={handleSubmit}>
      <h2>Add Project</h2>
      <label htmlFor="title">
        Title
        <input
          id="title"
          name="title"
          value={form.title}
          onChange={handleChange}
          required
        />
      </label>
      <label htmlFor="description">
        Description
        <textarea
          id="description"
          name="description"
          value={form.description}
          onChange={handleChange}
          rows={4}
        />
      </label>
      <button type="submit">Add</button>
    </form>
  );
}

export default AddProjectForm;
