"use client";

import type { Config, Data } from "@measured/puck";
import { Puck, Render } from "@measured/puck";
import config from "../../../puck.config";

import { AppBar, Box, Button, Toolbar } from '@mui/material';
import { useEffect, useState } from "react";

const onPublish = (data: any) => {
  console.log('onPublish', data);
  localStorage.setItem('dashboard', JSON.stringify(data));
};
export function Client({ path, data:initialData }: { path: string; data: Partial<Data> }) {
   const [data1, setData] = useState<any>(undefined);
  const [preview, setPreview] = useState(false);

  useEffect(() => {
    const parsed = localStorage.getItem('dashboard');
   
    if (parsed) {
      setData(JSON.parse(parsed));
    } else {
      setData(initialData);
    }
  }, []);

  if (!data1) {
    return null;
  }

  if (preview) {
    return (
      <>
        <AppBar sx={{ backgroundColor: 'white' }}>
          <Toolbar>
            <Box flexGrow={1} />
            <Button variant='text' onClick={() => setPreview(false)}>
              Edit
            </Button>
          </Toolbar>
        </AppBar>
        <Box sx={{ mt: '64px' }}>
          <Render config={config as Config} data={data1} />;
        </Box>
      </>
    );
  }
  return (
    <Puck
      config={config}
      data={data1}
      onPublish={onPublish}
      overrides={{
        headerActions: (props) => {
          return (
            <>
              <Button onClick={() => setPreview(true)}>Preview</Button>
              {props.children}
            </>
          );
        }
      }}
    />
  );
}
