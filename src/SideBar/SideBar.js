import {  DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    UserOutlined,
    LogoutOutlined,} from '@ant-design/icons'

    import {Link, links}from 'react-router-dom'

       export   const SideBarItems =[
        {
            icon: <PieChartOutlined />,
            label: <Link to="/">Categories</Link>,
            key: "categories",
          },
          {
            icon: <UserOutlined />,
            label: <Link to="/users">Users</Link>,
            key: "users",
          },
          {
            icon: <DesktopOutlined />,
            label: <Link to="/users">Posts </Link>,
            key: "posts",
          },
          {
            icon: <FileOutlined />,
            label: <Link to ="/Comments">Comments</Link>,
            key: "comments",
          },
          {
            label: "Logout",
            key: "logout",
            icon: <LogoutOutlined />,
          },
        
    ]