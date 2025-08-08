import React from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  console.log('Current language:', i18n.language);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeLanguage = (lng: string) => {
    console.log('Switching language to', lng);
    i18n.changeLanguage(lng, (err) => {
      if (err) {
        console.error('語言切換失敗:', err);
      } else {
        console.log('語言已切換為', i18n.language);
      }
    });
    handleClose();
  };

  return (
    <>
      <IconButton color="inherit" onClick={handleOpen}>
        <PublicIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={() => changeLanguage('en')}>English</MenuItem>
        <MenuItem onClick={() => changeLanguage('zh-TW')}>繁體中文</MenuItem>
      </Menu>
    </>
  );
};

export default LanguageSwitcher;
