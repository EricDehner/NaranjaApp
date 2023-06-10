import "./VideoTour.css"

const VideoTour = () => {
    return (
        <section className="videoTour">
            <h2 className="videoTour_title">Video Tour</h2>
            <iframe className="videoTour_video" src="https://www.youtube.com/embed/jkXT2mjXK2U" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <a className="videoTour_button" rel="noreferrer" target="_blank" href="https://api.whatsapp.com/send?phone=573136824424">Inicia tu experiencia</a>
        </section>
    )
}
export default VideoTour