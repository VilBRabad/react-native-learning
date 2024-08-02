import { View, Pressable, StyleSheet } from 'react-native';
import React from 'react';
import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player';
import Icon from "react-native-vector-icons/MaterialIcons";

import { playbackService } from '../../musicPlayerServices';

const ControllCenter = () => {
    const playbackState = usePlaybackState();

    const skipToNext = async () => {
        await TrackPlayer.skipToNext();
    };

    const skipToPrevious = async () => {
        await TrackPlayer.skipToPrevious();
    };

    const togglePlayback = async (playbackState: State) => {
        const currentTrackIndex = await TrackPlayer.getActiveTrackIndex();
        if (currentTrackIndex !== null) {
            if (playbackState === State.Paused || playbackState === State.Ready) {
                await TrackPlayer.play();
            } else {
                await TrackPlayer.pause();
            }
        }
    };

    return (
        <View style={styles.container}>
            <Pressable onPress={skipToPrevious}>
                <Icon style={styles.icon} size={40} name='skip-previous' />
            </Pressable>
            <Pressable onPress={() => togglePlayback(playbackState.state !== undefined ? playbackState.state : State.None)}>
                <Icon style={styles.icon} size={75} name={playbackState.state === State.Playing ? "pause" : "play-arrow"} />
            </Pressable>
            <Pressable onPress={skipToNext}>
                <Icon style={styles.icon} size={40} name='skip-next' />
            </Pressable>
        </View>
    );
};

export default ControllCenter;

const styles = StyleSheet.create({
    container: {
        marginBottom: 56,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        color: '#FFFFFF',
    },
    playButton: {
        marginHorizontal: 24,
    },
})
