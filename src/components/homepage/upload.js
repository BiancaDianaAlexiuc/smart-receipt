import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import BackupIcon from '@material-ui/icons/Backup';
import {useDropzone} from 'react-dropzone';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
  btnsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    maxWidth: 300,
    margin: '0 auto',
    justifyContent: 'space-between',
    paddingTop: 30
  }
}));

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  marginTop: 16
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 200,
  height: 200,
  padding: 4,
  boxSizing: 'border-box'
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%'
};

export default function UploadButtons(props) {
  const classes = useStyles();
  const [files, setFiles] = useState([]);
  const {getRootProps, getInputProps} = useDropzone({
    accept: "image/*",
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });

  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
        />
      </div>
    </div>
  ));

  return (
    <section>
    <div className={classes.root}  {...getRootProps({className: 'dropzone'})}>
      <div className={classes.btnsContainer}>
      <input
          className={classes.input}
          id="outlined-button-file"
          {...getInputProps()}
        />
        <div htmlFor="outlined-button-file">
          <Button variant="outlined" component="span" color="primary" >
            <PhotoCamera />  Choose file
          </Button>
        </div>
        <div htmlFor="outlined-button-file">
        <Button variant="outlined" component="span" color="primary" >
          <BackupIcon/>  Upload file
        </Button>
      </div>
      </div> 
      </div>
      <aside style={thumbsContainer}>
        {thumbs}
      </aside>
    </section>
  );
}
