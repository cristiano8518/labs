import { useState, useMemo, useCallback } from "react"
import type { ChangeEvent } from "react"
import { List } from "react-window"
import type { RowComponentProps } from "react-window"
import { generateItems } from "../utils/generateItems"

export function VirtualList() {

  const [filter, setFilter] = useState("")

  const items = useMemo(() => generateItems(10000), [])

  const filteredItems = useMemo(() => {

    if (!filter) return items

    return items.filter(item =>
      item.title.toLowerCase().includes(filter.toLowerCase()) ||
      item.category.toLowerCase().includes(filter.toLowerCase())
    )

  }, [items, filter])

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setFilter(e.target.value)
    },
    []
  )

  const Row = ({ index, style }: RowComponentProps) => {

    const item = filteredItems[index]

    return (

      <div style={style}>

        <h4>{item.title}</h4>
        <p>{item.description}</p>
        <span>{item.category}</span>

      </div>

    )
  }

  return (

    <div>

      <h2>Virtual List</h2>

      <input
        placeholder="filter..."
        value={filter}
        onChange={handleChange}
      />

      <List
        defaultHeight={500}
        rowCount={filteredItems.length}
        rowHeight={80}
        rowComponent={Row}
        rowProps={{}}
      />

    </div>

  )
}