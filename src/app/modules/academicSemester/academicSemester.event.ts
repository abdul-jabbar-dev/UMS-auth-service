import REDIS from '../../../shared/redis';
import { EVENT_ACADEMIC_SEMESTER_CREATED } from './academicSemester.constant';
import { IAcademicSemester } from './academicSemester.interface';
import { AcademicSemesterService } from './academicSemester.service';

const InitAcademicSemesterEvents = async () => {
  REDIS.subscribe(EVENT_ACADEMIC_SEMESTER_CREATED, async (e: string) => {
    const data: IAcademicSemester & { id: string } = JSON.parse(e);
    await AcademicSemesterService.createSemesterFromEvent(data);
  });
};
export default InitAcademicSemesterEvents;
