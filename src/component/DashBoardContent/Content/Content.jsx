




import EnrolledClass from '../EnrolledClass';
import SelectedClass from '../SelectedClass';
import StudentProgress from '../StudentProgress';
import Todo from '../Todo';

const Content = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 mx-auto gap-3 '>
           <SelectedClass/>
           <EnrolledClass/>
          <StudentProgress/>
          <Todo/>
        </div>
    );
};

export default Content;