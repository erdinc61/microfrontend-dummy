
    export type RemoteKeys = 'map/gridmap';
    type PackageType<T> = T extends 'map/gridmap' ? typeof import('map/gridmap') :any;