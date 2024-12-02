"use client"

import { sendEmail } from "../actions"

export default function Button() {

  return (
    <button
      onClick={sendEmail}
    >
      Click me
    </button>
  )

}