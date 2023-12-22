'use client'
import Image from 'next/image'
import Div from 'funuicss/ui/div/Div'
import Section from 'funuicss/ui/specials/Section'
import Text from 'funuicss/ui/text/Text'
import Button from 'funuicss/ui/button/Button'
import Input from 'funuicss/ui/input/Input'
import  FullCenteredPage from 'funuicss/ui/specials/FullCenteredPage';
import { PiPaperPlaneRight , PiMagnifyingGlass, PiUpload } from 'react-icons/pi';
import IconicInput from 'funuicss/ui/input/Iconic'
import Link from 'next/link'
import RowFlex from 'funuicss/ui/specials/RowFlex'
import Col from "funuicss/ui/grid/Col"
import { useState } from 'react'
export default function Home() {
  const [showForm, setshowForm] = useState(false)
  return (
    <main >
       <FullCenteredPage funcss='padding-top-40 padding-bottom-100' style={{maxWidth:"100%", minWidth:"100%"}}>
<div className='width-500-max fit'>
 {
  !showForm &&
  <Section gap={1}>
  <RowFlex gap={1}>
  <Input
  type='text'
  label='Staff ID'
  fullWidth
  />
  <Button
  text='Query'
  raised
  bg='dark'
  startIcon={<PiMagnifyingGlass />}
  onClick={ () => setshowForm(true) }
  />
  </RowFlex>
 </Section>
 }
{
  showForm &&
  <>
  <div className="margin-bottom-40 text-center">
<Text
   text='Welcome Back!'
   heading='h2'
   block
   />
   <Text
   text='Enter the details correctly to submit the form'
   block
   />
</div>
<Section gap={2}>
<div className='flex central'>
   <div>
   <Text text="Upload profile*" funcss="margin-bottom-10"  block size="small" bold color="primary"/>
   <Input
    file 
    fullWidth 
    bordered 
    button={<Button text='jpg, jpeg, png' fullWidth bg='dark' startIcon={<PiUpload />} raised/>}
    />
   </div>
    </div>
  </Section>
<Section gap={1.5}>
  <RowFlex gap={0.5}>
    <div>
    <Text text="Surname*" funcss="margin-bottom-10"  block size="small" bold color="primary"/>
   <Input type="text" fullWidth bordered />
    </div>
    <div>
    <Text text="Firstname*" funcss="margin-bottom-10"  block size="small" bold color="primary"/>
   <Input type="text" fullWidth bordered />
    </div>
    <div>
    <Text text="Middlename" funcss="margin-bottom-10"  block size="small" bold color="primary"/>
   <Input type="text" fullWidth bordered />
    </div>
  </RowFlex>
   
</Section>
<Section gap={1.5}>
  <RowFlex gap={0.5}>
    <Col>
    <Text text="Preferred Region(1st)*" funcss="margin-bottom-10"  block size="small" bold color="primary"/>
   <Input type="text" fullWidth bordered />
    </Col>
    <Col>
    <Text text="Preferred Region(2nd)*" funcss="margin-bottom-10"  block size="small" bold color="primary"/>
   <Input type="text" fullWidth bordered />
    </Col>
  </RowFlex>
   
</Section>
<Section gap={1.5}>
  <RowFlex gap={0.5}>
    <Col>
    <Text text="Preferred District(1st)*" funcss="margin-bottom-10"  block size="small" bold color="primary"/>
   <Input type="text" fullWidth bordered />
    </Col>
    <Col>
    <Text text="Preferred Disrict(2nd)*" funcss="margin-bottom-10"  block size="small" bold color="primary"/>
   <Input type="text" fullWidth bordered />
    </Col>
  </RowFlex>
   
</Section>

     <div className="section">
     <Button 
   fillAnimation 
   funcss='width-50-p'
   outlined 
   disabled
   outlineSize={0.1}
   fillTextColor='dark900' 
    bg="primary" 
    text="Submit"
    startIcon={<PiPaperPlaneRight />}
    onClick={ () => setshowForm(false) }
    />
</div>
  </>
}

   </div>
</FullCenteredPage>
    </main>
  )
}
