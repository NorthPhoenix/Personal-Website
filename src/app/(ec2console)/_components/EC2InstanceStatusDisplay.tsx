import { type InstanceStatus } from "@aws-sdk/client-ec2"

const EC2InstanceStatusDisplay: React.FC<{
  status: InstanceStatus
}> = ({ status }) => {
  return (
    <div>
      <h1>EC2 Instance Status</h1>
      <p>
        <strong>Instance ID:</strong> {status.InstanceId}
      </p>
      <p>
        <strong>Status:</strong> {status.InstanceState?.Name}
      </p>
      <p>
        <strong>System Status:</strong> {status.SystemStatus?.Status}
      </p>
      <p>
        <strong>Instance Status:</strong> {status.InstanceStatus?.Status}
      </p>
    </div>
  )
}

export default EC2InstanceStatusDisplay
