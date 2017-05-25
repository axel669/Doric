import React from 'react';
import ReactDOM from 'react-dom';

import icons from 'source/util/icons';
import {warningFunc} from 'source/util/utils';
import consts from 'source/util/consts';
import Env from 'source/util/env';

import ajax from 'source/util/ajax';
import fs from 'source/util/filesys';

import "source/util/chrono";
import "source/util/gesture";
import "source/util/deviceready";
import "source/util/settings";
import "source/util/api";

import theme from 'source/util/theme';
import BackgroundImage from 'source/component/BackgroundImage';
import Button from 'source/component/Button';
import Card from 'source/component/Card';
import {CenterContent, AlignContent} from 'source/component/ContentAligners';
import Checkbox from 'source/component/Checkbox';
import CustomEvents from "source/component/CustomEvents";
import Grid from 'source/component/Grid';
import {Icon, IconButton} from 'source/component/Icon';
import Image from 'source/component/Image';
import Input from 'source/component/Input';
import Pinboard from 'source/component/Pinboard';
import Progress from 'source/component/Progress';
import Screen from 'source/component/Screen';
import Slider from 'source/component/Slider';
import Spinner from 'source/component/Spinner';
import Tabs from 'source/component/Tabs';
import Toggle from 'source/component/Toggle';

import {CSS} from 'source/util/stylesheet';
import componentStyleSheet from 'source/util/app';

window.Doric = {
    BackgroundImage,
    Button,
    Card,
    CenterContent,
    AlignContent,
    Checkbox,
    CustomEvents,
    Grid,
    Icon,
    IconButton,
    Image,
    Input,
    Pinboard,
    Progress,
    Screen,
    Slider,
    Spinner,
    Tabs,
    Toggle
};
window.React = React;
window.ReactDOM = ReactDOM;
window.DoricUtil = {
    CSS,
    warningFunc,
    Env
};

window.ajax = ajax;
window.fs = fs;

Math.rand = (a, b = null) => {
    if (b === null) {
        b = a;
        a = 0;
    }
    return Math.floor(Math.random() * (b - a + 1)) + a;
};

window.cblog = console.log.bind(console);
window.cberr = console.error.bind(console);
