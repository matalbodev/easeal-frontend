import { NextPage } from "next";
import DashBoardLayout from '../../components/dashboard/Layout'

const Profile: NextPage = () => {
  return <DashBoardLayout title='Your profile'>
    <p>
      This is your profile page.
    </p>
  </DashBoardLayout>
};


export default Profile;