"use server"

import { render, renderPlainText } from 'jsx-email';
import { Template } from '@/emails/templates/Batman';

export async function sendEmail() {

  const html = await render(<Template personName="John" />)
  const plainText = await renderPlainText(<Template personName="John" />)

  console.log('XXXXXXXXXXXXXXXX HTML')
  console.log(html)

  console.log('XXXXXXXXXXXXXXXX TEXT')
  console.log(plainText)

}