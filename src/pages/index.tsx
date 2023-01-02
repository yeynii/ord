import Section from "@components/Section";
import Head from "next/head";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Main>
        <Flex>
          <Col>
            <Section />
          </Col>
          <Col>
            <Section />
          </Col>
          <Col>
            <Section />
          </Col>
          <Col>
            <Section />
          </Col>
          <Col>
            <Section />
          </Col>
          <Col>
            <Section />
          </Col>
          <Col>
            <Section />
          </Col>
        </Flex>
      </Main>
    </>
  );
}

const Main = styled.main`
  width: 100%;
  height: 100%;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
