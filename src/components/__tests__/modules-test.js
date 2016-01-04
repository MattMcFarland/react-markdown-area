import {
  MarkedPreview,
  MarkedToolbar,
  MarkedInput,
  LiveMarkedArea,
  MarkedArea
} from '../../';

import { expect } from 'chai';
import { describe, it } from 'mocha';

const OK = (obj) => {
  return expect(obj).to.not.be.an('undefined');
};

describe('Components', () =>{

  it('imports MarkedPreview', () => OK(MarkedPreview));
  it('imports MarkedToolbar', () => OK(MarkedToolbar));
  it('imports MarkedInput', () => OK(MarkedInput));

});


describe('Containers', () =>{

  it('imports LiveMarkedArea', () => OK(LiveMarkedArea));
  it('imports MarkedArea', () => OK(MarkedArea));

});
