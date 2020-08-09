import React, { useState, useEffect, useCallback } from "react"
import axios from "axios"
import { ROOT_URL } from "../../constants"

interface TUseAxios {
  url: string
  setUrl: () => void
  setData: () => void
  execute: () => void
  status: string
  value: object
  error: string
}

export type TNumbers = TUseAxios[]

export const useAxios = (initialUrl?: Request, initialData?: Response): Promise<Response[]> => {
  const [data, setData] = useState<TNumbers>(initialData)
  const [url, setUrl] = useState<TUseAxios>(initialUrl)
  const [status, setStatus] = useState("idle")
  const [error, setError] = useState(null)
  console.log("wha is the url", url)
  // The execute function wraps asyncFunction and
  // handles setting state for pending, value, and error.
  // useCallback ensures the below useEffect is not called
  // on every render, but only if asyncFunction changes.
  const execute = useCallback(() => {
    setStatus("pending")
    setData([])
    setError(null)
    return axios
      .get<TNumbers>(`${ROOT_URL}${url}`)
      .then((response) => {
        if (response.data?.status === 200) {
          setData(response.data?.data)
          setStatus("success")
        }
      })
      .catch((error) => {
        setError(error)
        setStatus("error")
      })
  }, [url])

  // Call execute if we want to fire it right away.
  // Otherwise execute can be called later
  useEffect(() => {
    if (url) {
      execute()
    }
  }, [execute, url])

  return [{ data, status, error }, setUrl]
}
