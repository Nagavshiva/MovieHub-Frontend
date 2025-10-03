import { useContext } from "react";
import type { MovieDataType } from "../../assets/data";
import { MovieContext } from "../../context/MovieContext";
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Stack,
    Typography,
    Grid,
} from "@mui/material";
import moviesIcon from "../../assets/icons/icon-category-movie.svg";
import tvSeriesIcon from "../../assets/icons/icon-category-tv.svg";
import BookmarkIcon from "../icons/bookmark-icon";
import BookmarkEmptyIcon from "../icons/bookmark-empy-icon";

interface MovieTrendCardProps {
    movie: MovieDataType;
}

const MovieTrendCard = ({ movie }: MovieTrendCardProps) => {
    const { dispatch } = useContext(MovieContext);

    const handleToggleBookmark = (id: string) => {
        dispatch({ type: "TOGGLE_BOOKMARK", id });
    };

    return (
        <Card sx={{ backgroundColor: "transparent" }} key={movie.id} elevation={0}>
            <CardContent
                sx={{
                    p: 0,
                    position: "relative",
                    display: "flex",
                    overflowX: "scroll",
                }}
            >
                {/* Movie Thumbnail */}
                <CardMedia
                    component="img"
                    image={movie.thumbnail.regular.large}
                    alt={movie.title}
                    sx={{ width: 300, height: "auto", borderRadius: 1 }}
                />

                {/* Overlay */}
                <Box
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        bgcolor: "rgba(0,0,0,0.6)",
                        borderRadius: 1,
                    }}
                />

                {/* Movie Info */}
                <Stack
                    spacing={0}
                    sx={{ position: "absolute", bottom: 0, left: 0, right: 0, p: 4 }}
                >
                    <Grid container alignItems="center" spacing={1}>
                        <Grid size="auto">
                            <Typography fontSize={10} color="#E0E0E0">
                                {movie.year}
                            </Typography>
                        </Grid>

                        <Grid size="auto">
                            <Box sx={{ width: 4, height: 4, bgcolor: "#E0E0E0", borderRadius: "50%" }} />
                        </Grid>

                        <Grid size="auto">
                            <img
                                src={movie.category === "Movies" ? moviesIcon : tvSeriesIcon}
                                alt={movie.category}
                                width={16}
                                height={16}
                            />
                        </Grid>

                        <Grid size="auto">
                            <Typography fontSize={10} color="#E0E0E0">
                                {movie.category}
                            </Typography>
                        </Grid>

                        <Grid size="auto">
                            <Box sx={{ width: 4, height: 4, bgcolor: "#E0E0E0", borderRadius: "50%" }} />
                        </Grid>

                        <Grid size="auto">
                            <Typography fontSize={10} color="#E0E0E0">
                                {movie.rating}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Typography color="#E0E0E0" aria-label="movie title">
                        {movie.title}
                    </Typography>
                </Stack>

                {/* Bookmark Button */}
                <Box
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        display: "flex",
                        justifyContent: "flex-end",
                        p: 2,
                    }}
                >
                    <Box
                        sx={{
                            p: 1,
                            backgroundColor: "black",
                            borderRadius: "50%",
                            cursor: "pointer",
                            "&:hover": { opacity: 0.8 },
                        }}
                        onClick={() => handleToggleBookmark(movie.id)}
                        aria-label={
                            movie.isBookmarked ? "Remove from bookmarks" : "Add to bookmarks"
                        }
                    >
                        {movie.isBookmarked ? (
                            <BookmarkIcon fill="#E0E0E0" />
                        ) : (
                            <BookmarkEmptyIcon />
                        )}
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};

export default MovieTrendCard;
