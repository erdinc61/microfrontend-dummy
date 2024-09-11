
    export type RemoteKeys = 'robot/gridrobot';
    type PackageType<T> = T extends 'robot/gridrobot' ? typeof import('robot/gridrobot') :any;