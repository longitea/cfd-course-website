import CourseCard from '../../components/CourseCard'
import { useCourse } from '../../hooks/useCourse'

export default function Course() {
    const courses = useCourse()

    return (
        <main className="homepage" id="main">
            {/* <Navigate to="/register"/> */}
            <section className="section-1">
                <div className="container">
                    <h2 className="main-title">KHÓA HỌC CFD</h2>
                    <p className="top-des">
                        The readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it
                        has
                        a more-or-less normal
                    </p>
                    <div className="textbox">
                        <h3 className="sub-title">KHÓA HỌC</h3>
                        <h2 className="main-title">OFFLINE</h2>
                    </div>
                    <div className="list row">
                        {
                            courses?.map((course) => <CourseCard key={course.id} {...course} />)
                        }
                    </div>
                </div>
            </section>
        </main>
    )
}
