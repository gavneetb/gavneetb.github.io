import React, { useState } from 'react';

import './About.css';
import SectionMain from '../../components/SectionMain';
import mountainsBackground from '../../res/images/mountainsBackground.svg';
import TeamMemberCard from '../../components/TeamMemberCard';

import salma_marzouk from '../../res/images/team/salma_marzouk.svg';
import caitlin_kwan from '../../res/images/team/caitlin_kwan.svg';
import helen_wang from '../../res/images/team/helen_wang.svg';

import helena_lee from '../../res/images/team/helena_lee.svg';
import angel_lin from '../../res/images/team/angel_lin.svg';
import julia_fedorin from '../../res/images/team/julia_fedorin.svg';
import abby_zinman from '../../res/images/team/abby_zinman.svg';
import catherine_hoang from '../../res/images/team/catherine_hoang.svg';
import jennifer_man from '../../res/images/team/jennifer_man.svg';
import sasha_takoo from '../../res/images/team/sasha_takoo.svg';
import gavneet_bhandal from '../../res/images/team/gavneet_bhandal.svg';

import krysten_tran from '../../res/images/team/krysten_tran.svg';
import ellie_xu from '../../res/images/team/ellie_xu.svg';
import heidi_zhu from '../../res/images/team/heidi_zhu.svg';
import franklin_ramirez from '../../res/images/team/franklin_ramirez.svg';
import hoor_ulain_umar from '../../res/images/team/hoor_ulain_umar.svg';

import kate_bendall from '../../res/images/team/kate_bendall.svg';
import muktha_kaja from '../../res/images/team/muktha_kaja.svg';
import sandy_rbahia from '../../res/images/team/sandy_rbahia.svg';
import manavjit_singh_dhindsa from '../../res/images/team/manavjit_singh_dhindsa.svg';

import rawan_miznazi from '../../res/images/team/rawan_miznazi.svg';
import pranav_bedi from '../../res/images/team/pranav_bedi.svg';
import milind_kumar from '../../res/images/team/milind_kumar.svg';
import enoch_tin from '../../res/images/team/enoch_tin.svg';
import smiksha_sharma from '../../res/images/team/smiksha_sharma.svg';

import Accordion from '../../components/Accordion/Accordion';

function About() {
  const [isOpen, setIsOpen] = useState(false);

  function setAccordianOpen(open) {
    setIsOpen(open);
  }

  return (
    <>
      <SectionMain
        mainTitle='Meet the Team'
        subTitle='Learn more about our 100% student-led team.'
        bgImg={mountainsBackground}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Chairs, Operations & Finance */}
        <div style={{ width: '85%' }}>
          <div className='about-header'>Chairs, Operations & Finance</div>
          <div className='team-section'>
            <div className='grid-container-odd'>
              <TeamMemberCard
                name='Salma Marzouk'
                linkedin='https://www.linkedin.com/in/gavneetbhandal/'
                role='Chair'
                picture={salma_marzouk}
                className='grid-item'
                showInfo={setAccordianOpen}
              />
              <TeamMemberCard
                name='Caitlin Kwan'
                role='Directior of Internal Operations'
                picture={caitlin_kwan}
                className='grid-item'
              />
              <TeamMemberCard
                name='Helen Wang'
                role='Director of Finance'
                picture={helen_wang}
                className='grid-item'
              />
            </div>
          </div>
          <Accordion isOpen={isOpen}>hello</Accordion>
        </div>
        {/* MARKETING SECTION */}
        <div style={{ width: '85%' }}>
          <div className='about-header'>Marketing</div>
          <div className='team-section'>
            <div className='grid-container-odd'>
              <TeamMemberCard
                name='Helena Lee'
                role='Director of Marketing'
                picture={helena_lee}
                className='grid-item'
              />
              <TeamMemberCard
                name='Angel Lin'
                role='Social Media Manager'
                picture={angel_lin}
                className='grid-item'
              />
              <TeamMemberCard
                name='Julia Fedorin'
                role='PR & Content Manager'
                picture={julia_fedorin}
                className='grid-item'
              />
            </div>
            <div className='grid-container-even'>
              <TeamMemberCard
                name='Abby Zinman'
                role='Web Designer'
                picture={abby_zinman}
                className='grid-item'
              />
              <TeamMemberCard
                name='Catherine Hoang'
                role='Web Designer'
                picture={catherine_hoang}
                className='grid-item'
              />
            </div>
            <div className='grid-container-odd'>
              <TeamMemberCard
                name='Jennifer Man'
                role='Senior Graphic Designer'
                picture={jennifer_man}
                className='grid-item'
              />
              <TeamMemberCard
                name='Sasha Takoo'
                role='Graphic Designer'
                picture={sasha_takoo}
                className='grid-item'
              />
              <TeamMemberCard
                name='Gavneet Bhandal'
                role='Web Developer'
                picture={gavneet_bhandal}
                className='grid-item'
              />
            </div>
          </div>
        </div>
        {/* SPONSORSHIPS */}
        <div style={{ width: '85%' }}>
          <div className='about-header'>Sponsorships</div>
          <div className='team-section'>
            <div className='grid-container-odd'>
              <TeamMemberCard
                name='Krysten Tran'
                role='Director of Sponsorships'
                picture={krysten_tran}
                className='grid-item'
              />
              <TeamMemberCard
                name='Ellie Xu'
                role='Sponsorships Manager'
                picture={ellie_xu}
                className='grid-item'
              />
              <TeamMemberCard
                name='Heidi Zhu'
                role='Sponsorships Manager'
                picture={heidi_zhu}
                className='grid-item'
              />
            </div>
            <div className='grid-container-even'>
              <TeamMemberCard
                name='Franklin Ramirez'
                role='Sponsorships Manager'
                picture={franklin_ramirez}
                className='grid-item'
              />
              <TeamMemberCard
                name='Hoor Ulain Umar'
                role='Sponsorships Manager'
                picture={hoor_ulain_umar}
                className='grid-item'
              />
            </div>
          </div>
        </div>
        {/* SPEAKER RELATIONSHIPS */}
        <div style={{ width: '85%' }}>
          <div className='about-header'>Speaker Relations</div>
          <div className='team-section'>
            <div className='grid-container-odd'>
              <TeamMemberCard
                name='Kate Bendall'
                role='Director of Speaker Relations'
                picture={kate_bendall}
                className='grid-item'
              />
              <TeamMemberCard
                name='Muktha Kaja'
                role='Speaker Relations Manager'
                picture={muktha_kaja}
                className='grid-item'
              />
              <TeamMemberCard
                name='Sandy Rbahia'
                role='Speaker Relations Manager'
                picture={sandy_rbahia}
                className='grid-item'
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
              }}
            >
              <TeamMemberCard
                name='Manavjit Singh Dhindsa'
                role='Speaker Relations Manager'
                picture={manavjit_singh_dhindsa}
              />
            </div>
          </div>
        </div>
        {/* LOGISTICS */}
        <div style={{ width: '85%' }}>
          <div className='about-header'>Logistics</div>
          <div className='team-section'>
            <div className='grid-container-odd'>
              <TeamMemberCard
                name='Rawan Miznazi'
                role='Director of Logistics'
                picture={rawan_miznazi}
                className='grid-item'
              />
              <TeamMemberCard
                name='Pranav Bedi'
                role='Production Manager'
                picture={pranav_bedi}
                className='grid-item'
              />
              <TeamMemberCard
                name='Milind Kumar'
                role='Logistics Manager'
                picture={milind_kumar}
                className='grid-item'
              />
            </div>
            <div className='grid-container-even'>
              <TeamMemberCard
                name='Enoch Tin'
                role='Logistics Manager'
                picture={enoch_tin}
                className='grid-item'
              />
              <TeamMemberCard
                name='Smiksha Sharma'
                role='Logistics Manager'
                picture={smiksha_sharma}
                className='grid-item'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
