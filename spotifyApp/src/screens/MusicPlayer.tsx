import { Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import TrackPlayer, { Track, useTrackPlayerEvents, Event } from 'react-native-track-player';
import { playListData } from '../constants';
import SongInfo from '../components/SongInfo';
import SongSlider from '../components/SongSlider';
import ControllCenter from '../components/ControllCenter';

const { width } = Dimensions.get('window');

const MusicPlayer = () => {

    const [track, setTrack] = useState<Track | null>()

    useTrackPlayerEvents([Event.PlaybackActiveTrackChanged], async (event) => {
        if (event.type === Event.PlaybackActiveTrackChanged) {
            try {
                const activeTrack = event.track;
                if (activeTrack) {
                    const trackDetails = await TrackPlayer.getTrack(activeTrack.id);
                    setTrack(trackDetails);
                } else {
                    setTrack(null);
                }
            } catch (error) {
                console.error('Error fetching track details:', error);
            }
        }
    })

    const renderArtWork = () => {
        return (
            <View style={styles.listArtWrapper}>
                <View style={styles.albumContainer}>
                    {track?.artwork && (
                        <Image
                            style={styles.albumArtImg}
                            source={{ uri: track?.artwork?.toString() }}
                        />
                    )}
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                horizontal
                data={playListData}
                renderItem={renderArtWork}
                keyExtractor={song => song.id.toString()}
            />

            <SongInfo track={track} />
            <SongSlider />
            <ControllCenter />
        </View>
    )
}

export default MusicPlayer

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#001d23',
    },
    listArtWrapper: {
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    albumContainer: {
        width: 300,
        height: 300,
    },
    albumArtImg: {
        height: '100%',
        borderRadius: 4,
    },
})