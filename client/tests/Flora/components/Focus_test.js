// eslint disable no-undef
import {expect} from 'chai';
import Focus from './../../../app/bundles/Flora/components/Focus';

var focus = {
  id: '1',
  position: 0,
  title: 'test focus',
  tasks : [
    {
      name: 'task 1',
      id: '1'
    },
    {
      name: 'task 2',
      id: '2'
    },
  ],
  deeds: [
    {
      name: 'deed 1',
      id: '1'
    },
    {
      name: 'deed 2',
      id: '2'
    },
  ]
};
var filter = 'SHOW_ALL_TASKS';


describe('Focus', ()=>  {
  describe('initial state', ()=> {

    var subject;
    var props = {focus: focus, filter: filter};
    beforeEach(()=>{
      subject = new Focus(props);
    });

    it('should have child elements', ()=>  {
      expect(subject.props.children.length).to.equal(4);
    });
  });

  // Testing non-export methods -- do this through Focus?
  describe('getActiveTasks', ()=> {
    it('should return all tasks for filter: SHOW_ALL_TASKS'), ()=> {
      expect(getActiveTasks(focus.tasks).length).to.equal(2);
    };
  });
});
