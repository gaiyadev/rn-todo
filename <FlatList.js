<FlatList
  keyExtractor={(task) => task.id}
  data={allTasks}
  renderItem={(data) => (
    <ListItems data={data.item} onDelete={onDeleteHandler} />
  )}
></FlatList>;
