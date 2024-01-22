import * as React from 'react';
import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Dimensions, ActivityIndicator, ScrollView, StatusBar, FlatList, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { upcomingMovies, popularMovies, nowPlayingMovies, searchMovies, baseImage } from '../api/apicalls';
import InputHeader from '../components/InputHeader';
import CategoryHeader from '../components/CategoryHeader';
import MovieCard from '../components/MovieCard';
import NowplayingCard from '../components/NowplayingCard';
import { COLORS } from '../theme/theme';

// lấy kích thước của màn hình
const { width, height } = Dimensions.get('window');
// sử dụng fetch để gửi yêu cầu đến nguồn dữ liệu. Sau đó, trích xuất và trả về dữ liệu JSON từ response. Nếu có lỗi, in lỗi ra console.
const getnowPlayingMoviesList = async () => {
    console.log(nowPlayingMovies);
    try {
        let response = await fetch(nowPlayingMovies);
        let json = await response.json();
        return json;
    } catch (error) {
        console.log("error");
    }
}
const getpopularMoviesList = async () => {
    try {
        let response = await fetch(popularMovies);
        let json = await response.json();
        return json;
    } catch (error) {
        console.log("error");
    }
}
const getupcomingMoviesList = async () => {
    try {
        let response = await fetch(upcomingMovies);
        let json = await response.json();
        return json;
    } catch (error) {
        console.log("error");
    }
}

const HomeScreen = ({ navigation }: any) => {
    const [ nowPlayingMoviesList, setNowPlayingMoviesList ] = useState<any>(undefined);
    const [ popularMoviesList, setPopularMoviesList ] = useState<any>(undefined);
    const [ upcomingMoviesList, setUpcomingMoviesList ] = useState<any>(undefined);
    const searchMoviesFunction = () => {
        navigation.navigate('Search');
    }

    // Khởi tạo dữ liệu khi component được mount, đồng thời đảm bảo rằng việc lấy dữ liệu chỉ xảy ra một lần.
    useEffect(() => {
        (async () => {
            let tempGetNowPlayingMoviesList = await getnowPlayingMoviesList();
            // Dữ liệu được lấy từ hàm getnowPlayingMoviesList và sau đó được lưu trữ trong trạng thái của component thông qua setNowPlayingMoviesList. Điều này giúp kích thích render lại component với dữ liệu mới nhất.
            setNowPlayingMoviesList(tempGetNowPlayingMoviesList.results);
        })();
    }, []);
    /* Với dependency array trống, useEffect chỉ chạy một lần sau khi component mount.
     Điều này đảm bảo rằng chỉ có một lần gọi để lấy và cập nhật danh sách phim đang chiếu khi component được hiển thị lần đầu tiên. */
    useEffect(() => {
        (async () => {
            let tempGetPopularMoviesList = await getpopularMoviesList();
            setPopularMoviesList(tempGetPopularMoviesList.results);
        })();
    }, []);

    useEffect(() => {
        (async () => {
            let tempGetUpcomingMoviesList = await getupcomingMoviesList();
            setUpcomingMoviesList(tempGetUpcomingMoviesList.results);
        })();
    }, []);

    console.log(nowPlayingMovies.length, popularMovies.length, upcomingMovies.length)

    if (nowPlayingMoviesList == undefined &&
        nowPlayingMoviesList == null &&
        popularMoviesList == undefined &&
        popularMoviesList == null &&
        upcomingMoviesList == undefined &&
        upcomingMoviesList == null) {
        return (
            <ScrollView
                contentContainerStyle={styles.scrollView}
            >
                <StatusBar hidden />

                <View style={styles.loadingContainer}>
                    {/* <ActivityIndicator size="large" color="orange" /> */}
                    <Text style={{ color: 'white' }}>Loading...</Text>
                </View>
            </ScrollView>
        );
    }
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                bounces={false}
                style={styles.scrollView}>
                <StatusBar hidden />
                <View style={styles.inputHeader}>
                    <InputHeader searchFunction={searchMoviesFunction} />
                </View>
                {!nowPlayingMoviesList && !popularMoviesList && !upcomingMoviesList && (
                    <View style={styles.loadingContainer}>
                        <ActivityIndicator size="large" color="orange" />
                    </View>
                )}
                {/* Category Header */}
                <CategoryHeader title={'Now Playing'} style={styles.category} />
                {/* tạo list theo chiều ngang*/}
                <FlatList
                    horizontal
                    bounces={false}
                    data={nowPlayingMoviesList}
                    keyExtractor={(item: any) => item.id}
                    contentContainerStyle={[ styles.containerGap, ]}
                    renderItem={({ item, index }) => (
                        <NowplayingCard
                            cardFunction={() => {
                                navigation.push('MovieDetails', { movieid: item.id });
                                console.log(item.id);
                            }}
                            cardWidth={width * 0.8}
                            title={item.title}
                            rate={item.vote_average}
                            voteCount={item.vote_count}
                            imagePath={baseImage('w500', item.poster_path)}
                        />
                    )}
                />
                {/* <CategoryHeader title={'Popular'} style={styles.category}></CategoryHeader>
                <FlatList
                    horizontal
                    bounces={false}
                    data={popularMoviesList}
                    keyExtractor={(item: any) => item.id}
                    contentContainerStyle={[ styles.containerGap, { minHeight: height / 3.2 } ]}
                    renderItem={({ item, index }) => (
                        <MovieCard
                            cardFunction={() => {
                                navigation.push('MovieDetails', { movieid: item.id });
                            }}
                            cardWidth={width / 2.6}
                            title={item.title}
                            imagePath={baseImage('w342', item.poster_path)}
                        />
                    )}
                /> */}
                <CategoryHeader title={'Comming Soon'} style={styles.category}></CategoryHeader>
                <FlatList
                    horizontal
                    bounces={false}
                    data={upcomingMoviesList}
                    keyExtractor={(item: any) => item.id}
                    contentContainerStyle={[ styles.containerGap, { minHeight: height / 3.2 } ]}
                    renderItem={({ item, index }) => (
                        <MovieCard
                            cardFunction={() => {
                                navigation.push('MovieDetails', { movieid: item.id });
                            }}
                            cardWidth={width / 2.6}
                            title={item.title}
                            imagePath={baseImage('w342', item.poster_path)}
                        />
                    )}
                />
            </ScrollView>
        </SafeAreaView>
    )

};


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        backgroundColor: COLORS.Background,
    },
    loadingContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputHeader: {
        marginHorizontal: 50,
        marginTop: 30,
    },
    containerGap: {
        paddingHorizontal: 20,
        gap: 20,
        flexGrow: 1,

    },
    category: {
        display: 'flex',
        flexDirection: 'row',
    },
});


export default HomeScreen;