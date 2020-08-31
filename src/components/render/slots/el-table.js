export default {
  columns(h, conf, key) {
    const list = []
    conf.__slot__.columns.forEach(item => {
      list.push(<el-table-column
          prop={item.prop}
          label={item.label}
          width={item.width}>
        </el-table-column>)
    })
    return list
  }
}
