// eslint disable no-undef
import {expect} from 'chai';
import Focus from './../../../app/bundles/Flora/components/Focus/index';
import getActiveTasks from './../../../app/bundles/Flora/components/Focus/index';

var focus = {
  id: '1',
  position: 0,
  title: 'test focus',
  tasks : [
    {
      title: 'to-do task',
      name: 'task 1',
      id: '1',
      points: 1
    },
    {
      title: 'to-do task',
      name: 'task 2',
      id: '2',
      points: 1
    },
  ],
  deeds: [
    {
      title: 'to-do task',
      name: 'deed 1',
      id: '1',
      points: 1
    },
    {
      title: 'to-do task',
      name: 'deed 2',
      id: '2',
      points: 1
    },
  ]
};
var filter = 'SHOW_ALL_TASKS';


describe('Focus', ()=>  {
  describe('initial state', ()=> {

    var subject;
    var props = {
      focus: focus,
      taskFilter: filter,
      optionsFilter: '',
      completeTask: {},
      deleteTask: {},
      undoDeed: {}
    };
    beforeEach(()=>{
      subject = new Focus(props);
    });

    it('should have child elements', ()=>  {
      expect(subject.props.children.length).to.equal(4);
    });
  });

  // Testing non-export methods -- do this through Focus?
  // maybe something like: https://github.com/speedskater/babel-plugin-rewire
  describe('getActiveTasks', ()=> {
    it('should return all tasks for filter: SHOW_ALL_TASKS'), ()=> {
      expect(getActiveTasks(focus.tasks).length).to.equal(2);
    };
  });
});
