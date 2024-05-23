import * as React from 'react';
import { Appbar } from 'react-native-paper';

const MyHeader: React.FC = () => {
  return (
    <Appbar.Header style={{ backgroundColor:'black' }}>
      <Appbar.Content title="Stopwatch" style={{ alignItems: 'center', color: "rgb(38 34 50)" }} />
    </Appbar.Header>
  );
};

export default MyHeader;
