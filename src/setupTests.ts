import * as chai from 'chai';
import * as chaiEnzyme from 'chai-enzyme';
import { configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as sinonChai from 'sinon-chai';

configure({ adapter: new Adapter() });

chai.use(sinonChai);
chai.use(chaiEnzyme());