import Section from "@components/Section";
import {
  UNIT,
  UNIT_TYPE_안흔함,
  UNIT_TYPE_특별함,
  UNIT_TYPE_흔함
} from "@src/unit/constants";
import Unit from "@src/unit/unit";
import Head from "next/head";
import { createContext, useState } from "react";
import styled from "styled-components";

export type UnitInfo = [Unit, number];
export interface myUnitsConfig {
  [key: string]: UnitInfo;
}

const initValue = Object.entries(UNIT).reduce(
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
            <Section type={UNIT_TYPE_흔함} />
            <Section type={UNIT_TYPE_안흔함} />
          </Col>
          <Col>
            <Section type={UNIT_TYPE_특별함} />
          </Col>
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
