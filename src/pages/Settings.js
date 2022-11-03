import styled from 'styled-components';

import Sidebar from '../components/Sidebar';

const Settings = () => {
  return (
    <>
      <PageBox>
        <SidebarBox>
          <Sidebar />
        </SidebarBox>
        <SettingsBox>
          <div>설정</div>
          <div>
            <div>폰트 설정</div>
          </div>
        </SettingsBox>
      </PageBox>
    </>
  );
};

const PageBox = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const SidebarBox = styled.div`
  display: flex;
  flex-basis: 5%;
`;

const SettingsBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 95%;
`;

export default Settings;
