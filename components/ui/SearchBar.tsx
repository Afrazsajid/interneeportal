import React from 'react'
import Form from "next/form"
import { Button } from './button'

const SearchBar = () => {
  return (
    <Form
  action="/search"
    
  className="flex items-center space-x-2 bg-gray-100 rounded-lg px-2 shadow-md w-full"
>
  <input
    type="text"
    name="query"
    placeholder="Search for products"
    className="w-full px-4 py-2 text-sm text-gray-700 bg-transparent border-none outline-none focus:ring-2 focus:ring-primary rounded-lg"
  />
  <Button
    type="submit"
    className="px-4  text-sm font-medium text-white bg-green-500 rounded-lg hover:bg-green-300 hover:text-gray-900 transition"
  >
    Search

  </Button>
</Form>

  )
}

export default SearchBar