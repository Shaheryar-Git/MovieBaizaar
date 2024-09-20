import React from "react";
import AuthLayout from "../../core/layouts/AuthLayout";
import MoviesList from "./pages/MoviesList/MoviesList";
import Webseries from "./pages/WebseriesList/Webseries";
import SeriesList from "./pages/SeriesList/SeriesList";
import Personallist from "./pages/Personallist.js/Personallist";
import Homepage from "./pages/Homepage/Homepage";
import MovieBookingForm from "./pages/FormTable/FormTable";

export const AuthRoutes = [{
    path: "/",
    element: <AuthLayout />,
    children: [
        { index: true, element: <Homepage /> },
        { path: "movies", element: <MoviesList /> },
        { path: "webseries", element: <Webseries />},
        { path: "series", element: <SeriesList />},
        { path: "my-list", element: <Personallist />},
        { path: "moviebookingform", element: <MovieBookingForm />},
    ]
}];
