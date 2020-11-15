import React from 'react';
import Link from 'next/link';

import {
  ContainerSide, ProfileImage, ContainerProfileInfo, Dashboard, SideMenuElem,
} from '../styles/pages/_side_menu';

import HomeDashboard from '../assets/home-dashboard.svg';
import ClassSvg from '../assets/class.svg';
import OrientationSvg from '../assets/orientation.svg';
import MonitoringSvg from '../assets/monitoring.svg';
import ChatSvg from '../assets/chat-ico.svg';
import ExitSvg from '../assets/exit.svg';

export default function SideMenu() {
  return (
    <>
      <ContainerSide>
        <ContainerProfileInfo>
          <ProfileImage />
          <h4>Nome aluno</h4>
          <p>Aluno</p>
        </ContainerProfileInfo>
        <Dashboard>
          <SideMenuElem>
            <HomeDashboard />
            Dashboard
          </SideMenuElem>
          <SideMenuElem>
            <ClassSvg />
            Turmas
          </SideMenuElem>
          <SideMenuElem>
            <OrientationSvg />
            Orientação
          </SideMenuElem>
          <SideMenuElem>
            <MonitoringSvg />
            Monitoria
          </SideMenuElem>
          <SideMenuElem>
            <ChatSvg />
            Chat
          </SideMenuElem>
          <Link href="/">
            <SideMenuElem>
              <ExitSvg />
              Sair
            </SideMenuElem>
          </Link>
        </Dashboard>
      </ContainerSide>
    </>
  );
}
