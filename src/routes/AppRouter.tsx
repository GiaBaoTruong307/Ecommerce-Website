import { Routes, Route } from 'react-router-dom'
import { routes } from './index'

const AppRouter = () => {
  return (
    <Routes>
      {routes.map(
        (route) =>
          route.component && (
            <Route key={route.path} element={<route.component />}>
              {route.children?.map((child: any) =>
                child.index ? (
                  <Route key="index" index element={<child.element />} />
                ) : (
                  <Route key={child.path} path={child.path} element={<child.element />} />
                )
              )}
            </Route>
          )
      )}
    </Routes>
  )
}

export default AppRouter

// import { Routes, Route } from 'react-router-dom'
// import { routes } from './index'

// const AppRouter = () => {
//   return (
//     <Routes>
//       {routes.map((route) =>
//         route.component ? (
//           // Có layout (MainLayout)
//           <Route key={route.path} element={<route.component />}>
//             {route.children?.map((child: any) =>
//               child.index ? (
//                 <Route key="index" index element={<child.element />} />
//               ) : (
//                 <Route key={child.path} path={child.path} element={<child.element />} />
//               )
//             )}
//           </Route>
//         ) : (
//           // Không có layout (ví dụ: login)
//           <Route key={route.path} path={route.path} element={<route.element />} />
//         )
//       )}
//     </Routes>
//   )
// }

// export default AppRouter
