import Section from "@components/Section";
import { 유닛 } from "@src/unit/constants";
import Unit from "@src/unit/unit";
import Head from "next/head";
import { createContext, useState } from "react";
import styled from "styled-components";
export interface myUnitsConfig {
  흔함: [Unit, number];
  안흔함: [Unit, number];
  특별함: [Unit, number];
}

const initValue = Object.entries(유닛).reduce(
  (prev, [key, value]) => ({
    ...prev,
    [key]: Object.entries(value).reduce(
      (p, [k, v]) => ({ ...p, [k]: [new Unit({ id: k, ...v }), 0] }),
      {}
    )
  }),
  {}
) as myUnitsConfig;

export const unitContext = createContext(null);

export default function Home() {
  const [myUnits, setMyUnits] = useState<myUnitsConfig>(initValue);
  return (
    <unitContext.Provider value={{ myUnits, setMyUnits }}>
      <Head>
        <title>Home</title>
      </Head>
      <Main>
        <Flex>
          <Col>
            <Section type="흔함" />
            <Section type="안흔함" />
          </Col>
          <Col>
            <Section type="특별함" />
          </Col>
          {/* <Col>
            <Section />
          </Col>
          <Col>
            <Section />
          </Col>
          <Col>
            <Section />
            <Section />
            <Section />
          </Col>
          <Col>
            <Section />
            <Section />
          </Col>
          <Col>
            <Section />
            <Section />
            <Section />
          </Col> */}
        </Flex>
      </Main>
    </unitContext.Provider>
  );
}

const Main = styled.main`
  width: 100%;
  height: 100%;
  padding: 10px;
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
  gap: 10px;
`;
