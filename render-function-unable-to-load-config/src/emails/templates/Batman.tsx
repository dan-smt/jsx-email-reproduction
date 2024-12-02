import { Body, Container, Head, Html, Preview, Section, Text, Tailwind, ColorScheme } from 'jsx-email';
import { twConfig } from '../config';

interface BatmanEmailProps {
  personName: string
}


export const previewProps = {
  personName: 'John Appleseed',
} as BatmanEmailProps;

export const templateName = 'Batman';

export const Template = ({ personName }: BatmanEmailProps) => {
  
  return (
    <Html>
      <Head>
        <ColorScheme mode="light only" />
      </Head>
      <Preview>
        Preview
      </Preview>
      <Tailwind config={twConfig} >
        <Body className="font-[Arial] bg-neutral-100" >
          <Container className="bg-white max-w-[720px] mx-auto p-8" >
            <Section className="leading-normal" >
              <Text>
                Hi {personName}
              </Text>
              <Text>
                I am BATMAN. Are you?
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
};
