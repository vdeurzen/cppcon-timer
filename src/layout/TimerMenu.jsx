import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import DashboardIcon from '@material-ui/icons/Dashboard'
import { Link } from 'react-router-dom'

// TODO extend menu, fix icons.

const menuItems = [
    {label: 'Timer', url: '/', icon: <DashboardIcon /> },
    {label: 'Config', url: '/config', icon: <DashboardIcon /> },
]

const TimerMenu = () => (
    <React.Fragment>
        {menuItems.map(({ label, url, icon}) => (
            <Link to={url} key={url}>
                <ListItem button>
                    <ListItemIcon>
                        {icon}
                    </ListItemIcon>
                    <ListItemText primary={label} />
                </ListItem>
            </Link>
        ))}
    </React.Fragment>
)

export default TimerMenu
