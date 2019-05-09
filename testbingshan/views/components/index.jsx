import React from 'react';
import styled from 'styled-components';
import { Layout, Spin } from 'antd';
import { View } from 'seal-client/Data';
import SideLeft from './form/sider/sidercontainer';
import CrfForm from './form';

const { Sider, Content } = Layout;
const StyledSide = styled(Sider)`
  background: #ffffff;
  z-index: 4;
  box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.15);
  min-width: 257px !important;
`;
const StyleContent = styled(Content)`
  background: #dddddd;
`;
const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${props => props.height}px;
  min-height: ${props => props.height}px;
  background: #fff;
`;

const height = document.body.clientHeight - 48;

const LayoutMain = () => (
  <View
    docType="keyayun.service.crf"
    view="sort-by-update"
    query={{
      'page[limit]': 10000,
      include_docs: false,
    }}
  >
    {(error, p, funcs) => {
      const { createDoc, updateDoc, readDoc } = funcs;
      const { docs, isLoading } = p;
      console.log('The result of loging crf is -----> ', p, isLoading);
      return (
        <Layout>
          <StyledSide>
            {!isLoading && <SideLeft formListDocs={docs} readDoc={readDoc} />}
            {isLoading && <Loading height={height}><Spin tip="Loading..." /></Loading>}
          </StyledSide>
          <Layout>
            <StyleContent>
              {!isLoading && (
                <CrfForm error={error} createForm={createDoc} updateForm={updateDoc} />
              )}
              {isLoading && <Loading height={height}><Spin tip="Loading..." /></Loading>}
            </StyleContent>
          </Layout>
        </Layout>
      );
    }}
  </View>
);

export default LayoutMain;
