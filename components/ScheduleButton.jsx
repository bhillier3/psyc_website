const ScheduleButton = (props) => {
  return (
    <form action="https://shawn-willson.clientsecure.me">
      <button
        type="submit"
        className={`schedule_button ${props.styles}`}
        data-spwidget-scope-id="f4031c84-3037-422a-9b5f-2e9c4cf6237a"
        data-spwidget-scope-uri="shawn-willson"
        data-spwidget-application-id="7c72cb9f9a9b913654bb89d6c7b4e71a77911b30192051da35384b4d0c6d505b"
        data-spwidget-scope-global data-spwidget-autobind
      >
        schedule appointment
      </button>
      <script src="https://widget-cdn.simplepractice.com/assets/integration-1.0.js"></script>
    </form>
  )
}

export default ScheduleButton;